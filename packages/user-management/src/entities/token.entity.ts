/*!
 * @copyright FLYACTS GmbH 2019
 */

import { BaseEntity } from '@flyacts/backend-core-entities';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import { UserEntity } from './user.entity';

/**
 * An entity representing a user`s tokens
 */
@Entity('tokens')
export class TokenEntity extends BaseEntity {

    /**
     * The access token itself.
     */
    @Column()
    public token!: string;

    /**
     * The scopes of the token.
     */
    @Column({
        type: 'simple-array',
        nullable: false,
    })
    public scopes!: string[];


    /**
     * Optional payload, to add data to the token
     */
    @Column({
        nullable: true,
    })
    public payload?: string;

    /**
     * The user the access token belongs to.
     */
    @ManyToOne(
        () => UserEntity,
        {
            nullable: false,
            cascade: ['insert'],
            eager: true,
        },
    )
    @JoinColumn({
        name: 'users_id',
    })
    public user!: UserEntity;
}
