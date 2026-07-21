//actuall logic to handle the creationand deletion of notes (fetch)

const prisma = require("../config/prisma");

//logic to get all muy notes
exports.getNotes = async(req, res) => {
    try {
        const notes = await prisma.notes.findMany();

        return res.status(200).json({
            success: true,
            message: 'notes fetched successfully',
            data: notes
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
};


//logic to add the notes
exports.addNote = async (req,res) => {
    try {
        const {
            title,
            body
        } = req.body;

        const note = await prisma.notes.create({

            data: {
                title,
                body
            }
        });

        return res.status(200).json({
            success: true,
            message: "note added successfully",
            data: note
        });

    } catch(error) {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
};

