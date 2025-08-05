export async function fetchAvailablePlaces() {

    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch places");
    }

    return resData.places;
}

export async function updatedUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            "Content-Type": "application/json",
        },

    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to update user places");
    }

    return resData.message;
}

export async function fetchUserPlaces() {
    const responseUser = await fetch("http://localhost:3000/user-places");
    const resUserData = await responseUser.json();
    if (!responseUser.ok) {
        throw new Error("Failed to fetch current places");
    }

    return resUserData.places;
}