/**
 * Cakebot - A fun and helpful Discord bot
 * Copyright (C) 2021-current year  Reece Dunham
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { EmbedField, MessageEmbed } from "discord.js"

export default function createEmbed(
    title: string,
    description: string,
    fields?: EmbedField[]
): MessageEmbed {
    const e = new MessageEmbed()

    e.setTitle(title)
    e.setDescription(description)
    e.setAuthor(
        "Cakebot",
        "https://raw.githubusercontent.com/cakebotpro/cakebot/master/content/cake.png",
        "https://cakebot.club"
    )
    e.setFooter("Created with ❤ by the Cakebot Team | https://cakebot.club")

    if (fields) {
        e.addFields(...fields)
    }

    return e
}
