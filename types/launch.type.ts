export type LaunchData = {
    id: number;
    cospar_id: string;
    sort_date: string;
    name: string;
    provider: LaunchProvider;
    vehicle: LaunchVehicle;
    pad: LaunchPad;
    missions: LaunchMission[];
    mission_description: string;
    launch_description: string;
    win_open: Date;
    t0: number;
    win_close: Date;
    est_date: {
        month: number;
        day: number;
        year: number;
        quarter: number;
    }
    date_str: string;
    weather_summary: string;
    weather_temp: number;
    weather_condition: string;
    weather_wind_mph: number;
    weather_icon: string;
    weather_updated: Date;
    quicktext: string;
    suborbital: boolean;
    modified: Date;
}

export type LaunchProvider = {
    id: number;
    name: string;
    slug: string;
}

export type LaunchVehicle = {
    id: string;
    name: string;
    company_id: string;
    slug: string;
}

export type LaunchPad = {
    id: number;
    name: string;
    location : {
        id: number;
        name: string;
        state: string;
        statename: string;
        country: string;
        slug: string;
    }
}

export type LaunchMission = {
    id: string;
    name: string;
    description: string;
}