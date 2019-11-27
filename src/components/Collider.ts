namespace CANNON
{
    /**
     * 碰撞体
     */
    export class Collider extends feng3d.Component
    {
        get shape()
        {
            return this._shape;
        }
        protected _shape: Shape;
    }
}