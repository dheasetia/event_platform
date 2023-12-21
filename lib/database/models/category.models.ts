import { Document, Schema, model } from 'mongoose';

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;