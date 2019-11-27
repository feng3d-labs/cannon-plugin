namespace CANNON
{
    /**
     * 刚体
     */
    export class Rigidbody extends feng3d.Behaviour
    {
        __class__: "physics.Rigidbody" = "physics.Rigidbody";

        body = new Body();

        runEnvironment = feng3d.RunEnvironment.feng3d;

        @feng3d.oav()
        @feng3d.serialize
        get mass()
        {
            return this.body.mass;
        }
        set mass(v)
        {
            this.body.mass = v;
        }

        init()
        {
            this.body = new Body({ mass: this.mass });

            this.body.position = new Vec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);

            var colliders = this.gameObject.getComponents(Collider);
            colliders.forEach(element =>
            {
                this.body.addShape(element.shape);
            });

        }

        /**
         * 每帧执行
         */
        update(interval?: number)
        {
            var scene3D = this.getComponentsInParents(feng3d.Scene3D)[0];
            if (scene3D)
            {
                this.transform.position = new feng3d.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
            }
        }
    }
}