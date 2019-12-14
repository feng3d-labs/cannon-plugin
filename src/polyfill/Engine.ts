namespace feng3d
{
    // 默认在 Scene.init 添加物理世界模块
    functionwrap.extendFunction(feng3d.Engine, "createNewScene", function (r)
    {
        r.gameObject.addComponent(CANNON.PhysicsWorld);
        return r;
    });

}