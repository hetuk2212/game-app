const User = require('../models/userModal');

// Register user function
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Store validation messages in an array
    let validationErrors = [];

    // Validate input
    if (!firstName) validationErrors.push('First name is required');
    if (!lastName) validationErrors.push('Last name is required');
    if (!email) validationErrors.push('Email is required');
    if (!password) validationErrors.push('Password is required');

    // If there are validation errors, return them with a 200 OK status
    if (validationErrors.length > 0) {
      return res.status(200).json({
        success: false,  // Add success flag
        message: 'Validation Failed',
        errors: validationErrors
      });
    }

    // Check if user already exists (based on email)
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(200).json({
        success: false,  // Add success flag
        message: 'Validation Failed',
        errors: ['User with this email already exists']
      });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // Save user to database
    await newUser.save();

    // Send success response with 200 OK
    return res.status(200).json({
      success: true,  // Success flag
      message: 'Successfully Registered',
      user: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      }
    });

  } catch (error) {
    // Handle any unexpected server-related issues
    console.error('Error during user registration:', error);
    return res.status(500).json({
      success: false,  // Add success flag
      message: 'Server Error: Unable to process your request at the moment. Please try again later.'
    });
  }
};
