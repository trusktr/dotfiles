"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codeMod = ((fileInfo, api, options) => {
    const j = api.jscodeshift;
    const ast = fileInfo.ast;
    const target = options.target;
    const path = target.thisOrClosest(j.TemplateLiteral).firstPath();
    const literal = path.node;
    const expressions = [];
    const firstStrValue = literal.quasis[0].value.cooked;
    if (firstStrValue) {
        expressions.push(j.stringLiteral(firstStrValue));
    }
    for (let i = 0; i < literal.expressions.length; i++) {
        const expr = literal.expressions[i];
        expressions.push(expr);
        const strValue = literal.quasis[i + 1].value.cooked;
        if (strValue) {
            expressions.push(j.stringLiteral(strValue));
        }
    }
    if (expressions.length === 0) {
        expressions.push(j.stringLiteral(firstStrValue));
    }
    function combineExpressions(rightIndex) {
        if (rightIndex === 0) {
            return expressions[0];
        }
        return j.binaryExpression('+', combineExpressions(rightIndex - 1), expressions[rightIndex]);
    }
    const combinedExpr = combineExpressions(expressions.length - 1);
    path.replace(combinedExpr);
    const resultText = ast.toSource();
    return resultText;
});
codeMod.canRun = (fileInfo, api, options) => {
    const j = api.jscodeshift;
    const ast = fileInfo.ast;
    const target = options.target;
    const path = target.thisOrClosest(j.TemplateLiteral).firstPath();
    return Boolean(path);
};
codeMod.scope = 'cursor';
codeMod.title = 'Replace with regular string';
codeMod.description = '';
codeMod.detail = '';
module.exports = codeMod;
//# sourceMappingURL=replace-with-regular-string.js.map