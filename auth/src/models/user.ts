import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    comparePassword(password: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(this.get('password'), salt);
        this.set('password', hashed);
    }
    done();
});

userSchema.methods.comparePassword = async function (password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.get('password'));
};

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
