import axios from "axios";

export async function uploadImage(base64ImageData: string): Promise<void> {
    try {
        const response = await axios.post('https://vintrackers.buildonlinestaging.com/upload/images/', {
            images: [base64ImageData]
        });
        console.log('Image upload successful:', response.data);
    } catch (error) {
        console.error('Image upload failed:', error);
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error('Server responded with:', error.response.data);
            }
        }
        throw new Error('Failed to upload image');
    }
}
