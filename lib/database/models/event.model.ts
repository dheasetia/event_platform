import mongoose, { Document, Schema, models, model} from 'mongoose';
import {IUser} from "@/lib/database/models/user.model";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    imageUrl: string;
    location?: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id: string, name: string};
    organizer: {_id: string, firstName: string, lastName: string};
}

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    imageUrl: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    startDateTime: {
        type: Date,
        default: Date.now
    },
    endDateTime: {
        type: Date,
        default: Date.now
    },
    price: {
        type: String,
    },
    isFree: {
        type: Boolean,
        default: false
    },
    url: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'Category'
    },
    organizer: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

const Event = model<IEvent>('Event', EventSchema);

export default Event;