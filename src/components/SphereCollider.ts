namespace feng3d
{
    export interface ComponentMap
    {
        SphereCollider: SphereCollider;
    }

    export interface SphereCollider
    {
        get shape(): CANNON.Sphere;
    }

    /**
     * 球形碰撞体
     */
    @feng3d.AddComponentMenu("Physics/Sphere Collider")
    @feng3d.RegisterComponent()
    export class SphereCollider extends Collider
    {
        /**
         * 半径
         */
        @feng3d.oav()
        @feng3d.serialize
        get radius()
        {
            return this._radius;
        }
        set radius(v)
        {
            this._radius = v;
            if (this._shape)
                this._shape.radius = v;
        }

        private _radius = 0.5;

        init()
        {
            this._shape = new CANNON.Sphere(this._radius);
        }
    }
}