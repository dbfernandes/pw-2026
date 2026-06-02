import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv"

dotenv.config({ quiet: true })

function validateEnv() {
    return cleanEnv(process.env, {
        PORT: port({ default: 4567 }),
        NODE_ENV: str({ choices: ["development", "production"] })
    })
}

export default validateEnv