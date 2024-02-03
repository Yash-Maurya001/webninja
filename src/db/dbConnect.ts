import mongoose from "mongoose"

export const connect_db = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!)
		const db = mongoose.connection
		db.on("connected", () => {
			console.log("DB connected")
		})
	} catch (error) {
		console.log(error)
	}
}
