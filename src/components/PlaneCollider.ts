import { Plane } from '@feng3d/cannon';
import { AddComponentMenu, RegisterComponent } from 'feng3d';
import { Collider } from './Collider';

declare global
{
    export interface MixinsComponentMap
    {
        PlaneCollider: PlaneCollider;
    }
}

export interface PlaneCollider
{
    get shape(): Plane;
}

/**
 * 平面碰撞体
 */
@AddComponentMenu('Physics/Plane Collider')
@RegisterComponent()
export class PlaneCollider extends Collider
{
    init()
    {
        this._shape = new Plane();
    }
}
