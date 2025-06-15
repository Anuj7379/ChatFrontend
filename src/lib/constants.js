export const HOST = import.meta.env.VITE_SERVER_URL;
export const SOCKET_HOST = import.meta.env.VITE_SOCKET_URL;

// Auth
export const LOGIN_ROUTE = `${HOST}/api/auth/login`;
export const SIGNUP_ROUTE = `${HOST}/api/auth/signup`;
export const GET_USERINFO_ROUTE = `${HOST}/api/auth/userinfo`;
export const LOGOUT_ROUTE = `${HOST}/api/auth/logout`;
export const UPDATE_PROFLE_ROUTE = `${HOST}/api/auth/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${HOST}/api/auth/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${HOST}/api/auth/remove-profile-image`;

// Messages
export const FETCH_ALL_MESSAGES_ROUTE = `${HOST}/api/messages/get-messages`;
export const UPLOAD_FILE = `${HOST}/api/messages/upload-file`;

// Channels
export const CREATE_CHANNEL = `${HOST}/api/channel/create-channel`;
export const GET_USER_CHANNELS = `${HOST}/api/channel/get-user-channels`;
export const GET_CHANNEL_MESSAGES = `${HOST}/api/channel/get-channel-messages`;

// Contacts
export const SEARCH_CONTACTS_ROUTES = `${HOST}/api/contacts/search`;
export const GET_CONTACTS_WITH_MESSAGES_ROUTE = `${HOST}/api/contacts/get-contacts-for-list`;
export const GET_ALL_CONTACTS = `${HOST}/api/contacts/all-contacts`;
