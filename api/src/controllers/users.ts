// Create a new user

// Get all users
router.get('/', async (req, res) => {
  try {
    const users: IUser[] = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;