// Pexels IDs are purely numeric; Unsplash IDs contain hyphens/letters
export const img = (id, w = 1200, q = 80) =>
  /^\d+$/.test(id)
    ? `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&q=${q}`
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
