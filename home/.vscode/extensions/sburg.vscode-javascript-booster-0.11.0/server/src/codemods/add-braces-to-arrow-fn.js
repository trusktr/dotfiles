"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codeMod = ((fileInfo, api, options) => {
    const j = api.jscodeshift;
    const ast = fileInfo.ast;
    const target = options.target;
    const node = target.firstNode();
    const expr = node.body;
    node.body = j.blockStatement([j.returnStatement(expr)]);
    const resultText = ast.toSource();
    return resultText;
});
codeMod.canRun = (fileInfo, api, options) => {
    const j = api.jscodeshift;
    const target = options.target;
    const node = target.firstNode();
    return j.ArrowFunctionExpression.check(node) && j.Expression.check(node.body);
};
codeMod.scope = 'cursor';
codeMod.title = 'Add braces to arrow function statement';
codeMod.description = '';
codeMod.detail = '';
module.exports = codeMod;
//# sourceMappingURL=add-braces-to-arrow-fn.js.map