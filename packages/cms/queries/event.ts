import { basehub } from "../index";

export async function getEvents() {
  return await basehub.query({
    events: {
      items: {
        id: true,
        title: true,
        date: true,
        location: true,
        description: true,
      },
    },
  });
}
