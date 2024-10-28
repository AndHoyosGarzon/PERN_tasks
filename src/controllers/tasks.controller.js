export const getAllTasks = async (req, res) => {
    res.status(200).json({message: 'Getting Tasks'})
}

export const getTaskId = async (req, res) => {
    res.status(200).json({message: 'Getting One Task by ID'})
}

export const createTask = async (req, res) => {
    res.status(200).json({message: 'Created Tasks'})
}

export const updateTaskId = async (req, res) => {
    res.status(200).json({message: 'Updating Tasks'})
}

export const deleteTask = async (req, res) => {
    res.status(200).json({message: 'Deleting Tasks'})
}