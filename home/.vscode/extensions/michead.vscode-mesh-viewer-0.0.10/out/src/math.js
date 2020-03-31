"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mat4 {
    constructor(elements = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1]) {
        this.elements = elements;
    }
    get _00() {
        return this.elements[0];
    }
    get _01() {
        return this.elements[1];
    }
    get _02() {
        return this.elements[2];
    }
    get _03() {
        return this.elements[3];
    }
    get _10() {
        return this.elements[4];
    }
    get _11() {
        return this.elements[5];
    }
    get _12() {
        return this.elements[6];
    }
    get _13() {
        return this.elements[7];
    }
    get _20() {
        return this.elements[8];
    }
    get _21() {
        return this.elements[9];
    }
    get _22() {
        return this.elements[10];
    }
    get _23() {
        return this.elements[11];
    }
    get _30() {
        return this.elements[12];
    }
    get _31() {
        return this.elements[13];
    }
    get _32() {
        return this.elements[14];
    }
    get _33() {
        return this.elements[15];
    }
    mulMat(b) {
        const a = this;
        return new Mat4([
            a._00 * b._00 + a._01 * b._10 + a._02 * b._20 + a._03 * b._30,
            a._00 * b._01 + a._01 * b._11 + a._02 * b._21 + a._03 * b._31,
            a._00 * b._02 + a._01 * b._12 + a._02 * b._22 + a._03 * b._32,
            a._00 * b._03 + a._01 * b._13 + a._02 * b._23 + a._03 * b._33,
            a._10 * b._00 + a._11 * b._10 + a._12 * b._20 + a._13 * b._30,
            a._10 * b._01 + a._11 * b._11 + a._12 * b._21 + a._13 * b._31,
            a._10 * b._02 + a._11 * b._12 + a._12 * b._22 + a._13 * b._32,
            a._10 * b._03 + a._11 * b._13 + a._12 * b._23 + a._13 * b._33,
            a._20 * b._00 + a._21 * b._10 + a._22 * b._20 + a._23 * b._30,
            a._20 * b._01 + a._21 * b._11 + a._22 * b._21 + a._23 * b._31,
            a._20 * b._02 + a._21 * b._12 + a._22 * b._22 + a._23 * b._32,
            a._20 * b._03 + a._21 * b._13 + a._22 * b._23 + a._23 * b._33,
            a._30 * b._00 + a._31 * b._10 + a._32 * b._20 + a._33 * b._30,
            a._30 * b._01 + a._31 * b._11 + a._32 * b._21 + a._33 * b._31,
            a._30 * b._02 + a._31 * b._12 + a._32 * b._22 + a._33 * b._32,
            a._30 * b._03 + a._31 * b._13 + a._32 * b._23 + a._33 * b._33
        ]);
    }
    static identity() {
        return new Mat4();
    }
    static translate(vec) {
        return new Mat4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            vec.x, vec.y, vec.z, 1
        ]);
    }
    static rotAroundAxis(axis, angle) {
        const _00 = Math.cos(angle) + axis.x * axis.x * (1 - Math.cos(angle));
        const _01 = axis.x * axis.y * (1 - Math.cos(angle)) - axis.z * Math.sin(angle);
        const _02 = axis.x * axis.z * (1 - Math.cos(angle)) + axis.y * Math.sin(angle);
        const _10 = axis.y * axis.x * (1 - Math.cos(angle)) + axis.z * Math.sin(angle);
        const _11 = Math.cos(angle) + axis.y * axis.y * (1 - Math.cos(angle));
        const _12 = axis.y * axis.z * (1 - Math.cos(angle)) - axis.x * Math.sin(angle);
        const _20 = axis.z * axis.x * (1 - Math.cos(angle)) - axis.y * Math.sin(angle);
        const _21 = axis.z * axis.y * (1 - Math.cos(angle)) + axis.x * Math.sin(angle);
        const _22 = Math.cos(angle) + axis.z * axis.z * (1 - Math.cos(angle));
        return new Mat4([
            _00, _01, _02, 0,
            _10, _11, _12, 0,
            _20, _21, _22, 0,
            0, 0, 0, 1
        ]);
    }
    static lookAt(eye, target, up) {
        const zAxis = eye.sub(target).normalized();
        const xAxis = up.cross(zAxis).normalized();
        const yAxis = zAxis.cross(xAxis);
        return new Mat4([
            xAxis.x, yAxis.x, zAxis.x, 0,
            xAxis.y, yAxis.y, zAxis.y, 0,
            xAxis.z, yAxis.z, zAxis.z, 0,
            xAxis.dot(eye.negated()), yAxis.dot(eye.negated()), zAxis.dot(eye.negated()), 1
        ]);
    }
    static perspective(fov, ratio, n, f) {
        const hHeight = Math.tan((fov * Math.PI / 180) / 2) * n;
        const hWidth = ratio * hHeight;
        const l = -hWidth;
        const r = hWidth;
        const b = -hHeight;
        const t = hHeight;
        return new Mat4([
            2 / (r - l), 0, 0, -(r + l) / (r - l),
            0, 2 / (t - b), 0, -(t + b) / (t - b),
            0, 0, -2 / (f - n), -(f + n) / (f - n),
            0, 0, 0, 1
        ]);
    }
    negated() {
        return new Mat4(this.elements.map((e) => -e));
    }
    transposed() {
        return new Mat4([
            this._00, this._10, this._20, this._30,
            this._01, this._11, this._21, this._31,
            this._02, this._12, this._22, this._32,
            this._03, this._13, this._23, this._33
        ]);
    }
    toArray() {
        return this.elements;
    }
}
exports.Mat4 = Mat4;
class Vec2 {
    constructor(elements = [0, 0, 0]) {
        this.elements = elements;
    }
    get u() {
        return this.elements[0];
    }
    get v() {
        return this.elements[1];
    }
    toArray() {
        return this.elements;
    }
}
exports.Vec2 = Vec2;
class Vec3 {
    constructor(elements = [0, 0, 0]) {
        this.elements = elements;
    }
    get x() {
        return this.elements[0];
    }
    get y() {
        return this.elements[1];
    }
    get z() {
        return this.elements[2];
    }
    add(b) {
        return new Vec3([
            this.x + b.x,
            this.y + b.y,
            this.z + b.z
        ]);
    }
    sub(b) {
        return this.add(b.negated());
    }
    mulScalar(b) {
        return new Vec3([
            this.x * b,
            this.y * b,
            this.z * b
        ]);
    }
    divScalar(b) {
        return this.mulScalar(1 / b);
    }
    dot(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }
    cross(b) {
        const a = this;
        return new Vec3([
            a.y * b.z - a.z * b.y,
            -a.x * b.z + a.z * b.x,
            a.x * b.y - a.y * b.x
        ]);
    }
    transformVec(b) {
        return new Vec4(this, 0).transform(b).xyz;
    }
    transformPos(b) {
        const res = new Vec4(this, 1).transform(b);
        return res.xyz.divScalar(res.w);
    }
    lengthSqrd() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.lengthSqrd());
    }
    dist(b) {
        return this.sub(b).length();
    }
    normalized() {
        return new Vec3([
            this.x / this.length(),
            this.y / this.length(),
            this.z / this.length()
        ]);
    }
    negated() {
        return new Vec3(this.elements.map((e) => -e));
    }
    toArray() {
        return this.elements;
    }
}
exports.Vec3 = Vec3;
class Vec4 {
    constructor(elements = [0, 0, 0, 0], w = 0) {
        if (Array.isArray(elements)) {
            this.elements = elements;
        }
        else {
            this.elements = [...elements.toArray(), w];
        }
    }
    get x() {
        return this.elements[0];
    }
    get y() {
        return this.elements[1];
    }
    get z() {
        return this.elements[2];
    }
    get w() {
        return this.elements[3];
    }
    get xyz() {
        return new Vec3(this.elements.slice(0, 3));
    }
    add(b) {
        const a = this;
        return new Vec4([
            a.x + b.x,
            a.y + b.y,
            a.z + b.z,
            a.w + b.w
        ]);
    }
    sub(b) {
        return this.add(b.negated());
    }
    mulScalar(b) {
        return new Vec4([
            this.x * b,
            this.y * b,
            this.z * b,
            this.w * b
        ]);
    }
    transform(b) {
        return new Vec4([
            b._00 * this.x + b._01 * this.y + b._02 * this.z + b._03 * this.z,
            b._10 * this.x + b._11 * this.y + b._12 * this.z + b._13 * this.w,
            b._20 * this.x + b._21 * this.y + b._22 * this.z + b._23 * this.w,
            b._30 * this.x + b._31 * this.y + b._32 * this.z + b._33 * this.w,
        ]);
    }
    dot(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w;
    }
    lengthSqrd() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.lengthSqrd());
    }
    normalized() {
        return new Vec4([
            this.x / this.length(),
            this.y / this.length(),
            this.z / this.length(),
            this.w / this.length()
        ]);
    }
    negated() {
        return new Vec4(this.elements.map((e) => -e));
    }
    toArray() {
        return this.elements;
    }
}
exports.Vec4 = Vec4;
//# sourceMappingURL=math.js.map