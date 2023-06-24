// const express = require('express');
// const router = express.Router();
// const {gettodoscontroller} = require('../controller/todoscontroller')


// router.get('/',gettodoscontroller);

// const express = require('express');
// const router = express.Router();
// // router.use(express.json());
// const {todosgetcontroller,todospostcontroller} = require('../controller/todoscontroller');



// router.get('/',todosgetcontroller);
// router.post('/',todospostcontroller);

// module.exports = router


const express = require('express');
const router = express.Router();
const {
        gettodoscontroller,
        gettodocontroller,
        createtodocontroller,
        updatetodocontroller,
        deletetodocontroller
    } = require('../controller/todoscontroller');

router.get('/',gettodoscontroller);
router.get('/:id',gettodocontroller);
router.post('/',createtodocontroller);
router.put('/:id',updatetodocontroller);
router.delete('/:id',deletetodocontroller);

module.exports = router