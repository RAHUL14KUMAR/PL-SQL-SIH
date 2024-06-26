const express = require("express");
const { createComplaintTable, createComplaint, getComplaint, addNodalDescription, addNodeToPath, addCommentsOnparticularComplaint, getAllCommentOnParticularComplaint, seePathToTravel, userMarkedComplaintStatus, markAsDoneByAssignedOfficers } = require("../controllers/complaintControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/createTable', createComplaintTable);
router.get('/getComplain',protect,getComplaint)

router.post('/createComplain',protect,createComplaint)

router.put('/addDescription/:id',protect,addNodalDescription);
router.post('/addPath/:id',protect,addNodeToPath);
router.get('/seePathToTravel/:id',protect,seePathToTravel);

router.post('/addComment/:id',protect,addCommentsOnparticularComplaint)
router.get('/getAllComment/:id',protect,getAllCommentOnParticularComplaint)

router.put("/userMarkResolved/:id", protect, userMarkedComplaintStatus);

router.put("/markAsDone/:id", protect, markAsDoneByAssignedOfficers);


module.exports=router;