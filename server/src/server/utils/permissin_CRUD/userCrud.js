import {ROLE} from '../constants'

export const ROLE_CRUD_USER_PERMISSIONS = new Map([
    [
        "POST",
        {
            self: [],
            other: new Map([
                [ROLE.ADMIN, [ROLE.CREATIVE, ROLE.BUYER, ]],
                [ROLE.CREATIVE, []],
                [ROLE.BUYER, []],
            ])
        },
    ],

    [
        "GET",
        {
            self: Object.values(ROLE),
            other: new Map([
                [ROLE.ADMIN, [ROLE.CREATIVE, ROLE.BUYER, ]],
                [ROLE.CREATIVE, []],
                [ROLE.BUYER, []],
            ])
        }
    ],
    [
        "PUT",
        {
            self: [ROLE.BUYER, ROLE.CREATIVE],
            other: new Map([
                [ROLE.ADMIN, [ROLE.CREATIVE, ROLE.BUYER,]],
                [ROLE.CREATIVE, []],
                [ROLE.BUYER, []],
            ]),
        }
    ],

    [
        'DELETE',
        {
            self: [ROLE.BUYER, ROLE.CREATIVE],
            other: new Map([
                [ROLE.ADMIN, [ROLE.CREATIVE, ROLE.BUYER,]],
                [ROLE.CREATIVE, []],
                [ROLE.BUYER, []],
            ]),
        }
    ],
]);
