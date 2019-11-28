namespace CANNON
{
    /**
     * 物理世界组件
     */
    export class PhysicsWorld extends feng3d.Behaviour
    {
        runEnvironment = feng3d.RunEnvironment.feng3d;

        /**
         * 物理世界
         */
        world = new World();

        /**
         * 重力加速度
         */
        @feng3d.oav()
        @feng3d.serialize
        gravity = new feng3d.Vector3(0, -9.82, 0);

        init()
        {
            super.init();
        }

        private _isInit = false;
        private initWorld()
        {
            if (this._isInit) return true;
            this._isInit = true;

            var bodys = this.getComponentsInChildren(Rigidbody).map(c => c.body);
            bodys.forEach(v =>
            {
                this.world.addBody(v);
            });

            //
            this.on("addChild", this.onAddChild, this);
            this.on("removeChild", this.onRemoveChild, this);
            this.on("addComponent", this.onAddComponent, this);
            this.on("removeComponent", this.onRemovedComponent, this);
        }

        private onAddComponent(e: feng3d.Event<feng3d.Component>)
        {
            if (e.data instanceof Rigidbody)
            {
                this.world.addBody(e.data.body);
            }
        }

        private onRemovedComponent(e: feng3d.Event<feng3d.Component>)
        {
            if (e.data instanceof Rigidbody)
            {
                this.world.removeBody(e.data.body);
            }
        }

        private onAddChild(e: feng3d.Event<feng3d.GameObject>)
        {
            var bodyComponent = e.data.getComponent(Rigidbody);
            if (bodyComponent)
            {
                this.world.addBody(bodyComponent.body);
            }
        }

        private onRemoveChild(e: feng3d.Event<feng3d.GameObject>)
        {
            var bodyComponent = e.data.getComponent(Rigidbody);
            if (bodyComponent)
            {
                this.world.removeBody(bodyComponent.body);
            }
        }

        update(interval?: number)
        {
            this.initWorld();
            this.world.gravity = new Vector3(this.gravity.x, this.gravity.y, this.gravity.z);
            this.world.step(1.0 / 60.0, interval / 1000, 3);
        }

    }
}