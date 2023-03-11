import timeZones from "../time-zones";

const placeIndex = (value: string): number => {
    return timeZones.findIndex((obj) =>
        JSON.stringify(obj)
            .toLowerCase()
            .includes(value.toLowerCase())
    );
};

export default placeIndex;