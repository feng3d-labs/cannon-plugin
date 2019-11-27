namespace CANNON
{
    /**
     * 平面碰撞体
     */
    export class PlaneCollider extends Collider
    {
        readonly shape: Plane;
        protected _shape: Plane;

        init()
        {
            this._shape = new Plane();
        }
    }
}