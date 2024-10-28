export const signin = async (req, res) => {
    res.status(200).json({message: 'signing...!'})
}

export const signup = async  (req, res) => {
    res.status(200).json({message: 'Register...!'})
}

export const signout = async  (req, res) => {
    res.status(200).json({message: 'signout ...!'})
}

export const profile = async  (req, res) => {
    res.status(200).json({message: 'user profile...!'})
}