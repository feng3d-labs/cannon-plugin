namespace feng3d
{
    export interface ComponentMap
    {
        Rigidbody: Rigidbody;
    }

    /**
     * 刚体
     */
    @feng3d.AddComponentMenu("Physics/Rigidbody")
    @feng3d.RegisterComponent()
    export class Rigidbody extends feng3d.Behaviour
    {
        __class__: "physics.Rigidbody";

        body = new CANNON.Body();

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
            this.body = new CANNON.Body({ mass: this.mass });

            this.body.position = new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z);

            var colliders = this.gameObject.getComponents(Collider);
            colliders.forEach(element =>
            {
                this.body.addShape(element.shape);
            });

            this.on("transformChanged", this._onTransformChanged, this);
        }

        private _onTransformChanged()
        {
            this.body.position = new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
        }

        /**
         * 每帧执行
         */
        update(interval?: number)
        {
            var scene = this.getComponentsInParent(feng3d.Scene)[0];
            if (scene)
            {
                this.transform.position = new feng3d.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
            }
        }
    }
}