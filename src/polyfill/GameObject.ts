namespace feng3d
{
    functionwrap.extendFunction(GameObject, "createPrimitive", (g, type) =>
    {
        if (type == "Cube")
        {
            g.addComponent(CANNON.BoxCollider);
            g.addComponent(CANNON.Rigidbody);
        } else if (type == "Plane")
        {
            g.addComponent(CANNON.PlaneCollider);
            g.addComponent(CANNON.Rigidbody);
        } else if (type == "Cylinder")
        {
            g.addComponent(CANNON.CylinderCollider);
            g.addComponent(CANNON.Rigidbody);
        } else if (type == "Sphere")
        {
            g.addComponent(CANNON.SphereCollider);
            g.addComponent(CANNON.Rigidbody);
        } else if (type == "Capsule")
        {
            g.addComponent(CANNON.CapsuleCollider);
            g.addComponent(CANNON.Rigidbody);
        } else if (type == "Cloth")
        {
            g.addComponent(CANNON.Cloth)
        }
        return g;
    });
    export interface PrimitiveGameObject
    {
        Cloth: GameObject;
    }
}