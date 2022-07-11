namespace feng3d { export interface ComponentMap { PlaneCollider: CANNON.PlaneCollider; } }

namespace CANNON
{
    export interface PlaneCollider
    {
        get shape(): Plane;
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
            this._shape = new Plane();
        }
    }
}