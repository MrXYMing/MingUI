/**
 * 原型式继承，等同于 Object.create()
 * 注意：对象中的引用类型的属性会被共用
 * */
let inheritObject = function (o) {
    function F() { };
    F.prototype = o;
    return new F();
}
/**
 * 寄生式继承 继承原型
 * @param {*} subClass 子类
 * @param {*} superClass 父类
 */
let inheritPrototype = function (subClass, superClass) {
    let p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}

export { inheritObject, inheritPrototype }