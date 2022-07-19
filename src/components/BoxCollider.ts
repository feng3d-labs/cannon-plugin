namespace feng3d
{
    export interface ComponentMap
    {
        BoxCollider: BoxCollider;
    }

    export interface BoxCollider
    {
        get shape(): CANNON.Box;
    }

    /**
     * 长方体碰撞体
     */
    @feng3d.AddComponentMenu("Physics/Box Collider")
    @feng3d.RegisterComponent()
    export class BoxCollider extends Collider
    {
        /**
         * 宽度
         */
        @feng3d.oav()
        @feng3d.serialize
        width = 1;

        /**
         * 高度
         */
        @feng3d.oav()
        @feng3d.serialize
        height = 1;

        /**
         * 深度
         */
        @feng3d.oav()
        @feng3d.serialize
        depth = 1;

        protected _shape: CANNON.Box;

        init()
        {
            var halfExtents = new Vector3(this.width / 2, this.height / 2, this.depth / 2);
            this._shape = new CANNON.Box(halfExtents);
        }
    }
}

