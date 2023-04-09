import Events from "../models/Events.js";

class eventsController {
    static async registerEvents(req, res) {
        try {
            const { dateEvents, titleEvents, attractions, description, capacity } = req.body

            let newEvents = new Events({
                dateEvents, titleEvents, attractions, description, capacity
            })

            const result = await newEvents.save()
            res.json(result)

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async listEvents(req, res) {
        try {
            const eventsList = await Events.find()
            res.json(eventsList)
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async searchEvents(req, res) {

        try {
            const id = req.params.id
            const events = await Events.findById(id)
            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async updateEvents(req, res) {
        try {
            const id = req.params.id
            const { dateEvents, titleEvents, attractions, description, capacity } = req.body
            const eventsUpdate = await Events.findByIdAndUpdate(id,
                {
                    dateEvents,
                    titleEvents,
                    attractions,
                    description,
                    capacity
                })
                return res.status(200).json(eventsUpdate)

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async deleteEvents(req, res) {
        try {
            const id = req.params.id
            const eventDelete = await Events.findByIdAndDelete(id)
            return res.status(200).json(eventDelete)

        } catch (error) {
            return res.status(500).json({ error: err.message })
        }
    }
}

export default eventsController