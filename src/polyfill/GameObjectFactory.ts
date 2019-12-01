namespace feng3d
{
    functionwrap.extendFunction(GameObject, "createPrimitive", (g, type) =>
    {
        switch (type)
        {
            case "Cube":
                g.addComponent(CANNON.BoxCollider);
                g.addComponent(CANNON.Rigidbody);
                break;
        }
        return g;
    });

    functionwrap.extendFunction(GameObjectFactory.prototype, "createPlane", (g) =>
    {
        g.addComponent(CANNON.PlaneCollider);
        g.addComponent(CANNON.Rigidbody);
        return g;
    });

    functionwrap.extendFunction(GameObjectFactory.prototype, "createCylinder", (g) =>
    {
        g.addComponent(CANNON.CylinderCollider);
        g.addComponent(CANNON.Rigidbody);
        return g;
    });

    functionwrap.extendFunction(GameObjectFactory.prototype, "createSphere", (g) =>
    {
        g.addComponent(CANNON.SphereCollider);
        g.addComponent(CANNON.Rigidbody);
        return g;
    });

    functionwrap.extendFunction(GameObjectFactory.prototype, "createCapsule", (g) =>
    {
        g.addComponent(CANNON.CapsuleCollider);
        g.addComponent(CANNON.Rigidbody);
        return g;
    });

    export interface GameObjectFactory
    {
        createCloth(name?: string): GameObject;
    }

    GameObjectFactory.prototype.createCloth = function (name = "Cloth")
    {
        var g = serialization.setValue(new GameObject(), {
            name: name,
        });
        g.addComponent(CANNON.Cloth)
        return g;
    }

}