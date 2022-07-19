namespace feng3d
{
    export interface ComponentMap
    {
        PlaneCollider: PlaneCollider;
    }

    export interface PlaneCollider
    {
        get shape(): CANNON.Plane;
    }

    /**
     * 平面碰撞体
     */
    @feng3d.AddComponentMenu("Physics/Plane Collider")
    @feng3d.RegisterComponent()
    export class PlaneCollider extends Collider
    {
        init()
        {
            this._shape = new CANNON.Plane();
        }
    }
}