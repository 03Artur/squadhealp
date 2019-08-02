import addCostToTask from './task/addCostToTask';
import addPriorityToTask from './task/addPriorityToTask';
import checkUserCrudTaskPermissions from './task/checkUserCrudTaskPermissions';
import {validateTaskOnCreate, validateTaskOnUpdate} from './task/validateTask';
import {validateContestOnCreate, validateContestOnUpdate} from './validateContest';
import checkUserCrudContestPermissions from './checkUserCrudContestPermissions';

export default {
    addPriorityToTask,
    addCostToTask,
    validateTaskOnUpdate,
    validateTaskOnCreate,
    validateContestOnCreate,
    validateContestOnUpdate,
    checkUserCrudContestPermissions,
    checkUserCrudTaskPermissions,
}