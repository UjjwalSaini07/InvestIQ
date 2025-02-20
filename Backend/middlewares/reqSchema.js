const z = require("zod");

const baseSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3 , {
            message : "Name must be atleast 3 characters long"
        })
        .max(200 , {
            message : "Name must not exceed 200 characters"
        })
        .optional(),
    email: z
        .string()
        .trim()
        .email({
            message : "Invalid email"
        })
        .optional(),
    password: z
        .string()
        .min(6 , {
            message : "Password must be atleast 6 characters long"
        })
        .max(1024 , {
            message : "Password must not exceed 200 characters"
        })
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
            {
                message : "Password must contain atleast one uppercase letter, one lowercase letter and one number"
            }
        )
        .optional(),
    newPassword: z
        .string()
        .min(6 , {
            message : "Password must be atleast 6 characters long"
        })
        .max(1024 , {
            message : "Password must not exceed 200 characters"
        })
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
            {
                message : "Password must contain atleast one uppercase letter, one lowercase letter and one number"
            }
        )
        .optional()
});

const registerSchema = baseSchema.pick({
    name: true,
    email: true,
    password: true
})

const loginSchema = baseSchema.pick({
    email: true,
    password: true
})

const forgotPasswordSchema = baseSchema.pick({
    email: true
})

const resetPasswordSchema = baseSchema.pick({
    email: true,
    newPassword: true
})

const validateRequest = (schema) => {
    return async (req , res , next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const err = error.errors.map(err => err.message).join(", ");
                return res.status(400).json({
                    success: false,
                    error: err
                });
            }
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }
    };
};

module.exports = {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    validateRequest
}