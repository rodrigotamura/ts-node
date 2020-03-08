import { Schema, model, Document } from 'mongoose'

// declaring interface, we can see these properties/methods in intellisense
// when we use UserSchema, because of
// export default model<UserInterface>('User', UserSchema)
//                           👆
interface UserInterface extends Document {
    email?: string,
    firstName?: string,
    lastName?: string,
    fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

// adding new method for UserSchema
UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserSchema)
