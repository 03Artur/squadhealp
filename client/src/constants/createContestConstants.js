import {COMPLEX_PATH, TASK_TYPE} from "./index";

export const CREATE_CONTEST_STEPS = {
    SELECT_TASK_TYPE: "SELECT_TASK_TYPE",
    CREATE_CONTEST: 'CREATE_CONTEST',
    CONTEST_PAYMENT: 'CONTEST_PAYMENT',
    CREATE_TASKS: "CREATE_TASKS",
};


export const CREATE_CONTEST_STEP_INFO = new Map(
    [
        [
            CREATE_CONTEST_STEPS.SELECT_TASK_TYPE,
            {
                path: COMPLEX_PATH.SELECT_TASK_TYPE,
                order: 0,
                queryKey: "types",
                title: 'Start a contest',
                progressTip: 'Select Contest Type',
                description: 'Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!',
            }
        ],
        [
            CREATE_CONTEST_STEPS.CREATE_CONTEST,
            {
                path: COMPLEX_PATH.CREATE_CONTEST,
                order: 1,
                queryKey: "contestId",
                title: 'Describe Your Business',
                progressTip: 'Your Business',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',
            }
        ],
        [
            CREATE_CONTEST_STEPS.CREATE_TASKS,
            {
                path: COMPLEX_PATH.CREATE_TASK,
                order: 2,
                queryKey: "type",
                initialValues: {
                  type: TASK_TYPE.NAME,
                },
                title: 'Name',
                progressTip: 'Name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',
            }
        ],
        [
            CREATE_CONTEST_STEPS.CREATE_TASKS,
            {
                path: COMPLEX_PATH.CREATE_TASK,
                initialValues: {
                    type: TASK_TYPE.LOGO,
                },
                queryKey: "logoId",
                order: 3,
                title: 'Logo',
                progressTip: 'Logo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',
            }
        ],
        [
            CREATE_CONTEST_STEPS.CREATE_TASKS,
            {
                path: COMPLEX_PATH.CREATE_TASK,
                initialValues: {
                    type: TASK_TYPE.TAGLINE,
                },
                queryKey: "taglineId",
                order: 4,
                title: 'Tagline',
                progressTip: 'Tagline',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',
            }
        ],
        [
            CREATE_CONTEST_STEPS.CONTEST_PAYMENT,
            {
                path: COMPLEX_PATH.TASK_PAYMENT,
                order: 5,
                queryKey: 'isPaid',
                title: 'Payment',
                progressTip: 'Select Contest Type',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',
            }
        ],
    ]
);