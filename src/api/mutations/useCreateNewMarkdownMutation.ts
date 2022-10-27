import axios from 'axios';

const { API_BASE_URL } = process.env;

export interface IPostMarkdownVariables {
  name?: string;
  content?: string;
  createdAt?: string;
}

const ENDPOINT = `${API_BASE_URL}api/v1/markdowns`;

export const useCreateNewMarkdown = async (
  formData: IPostMarkdownVariables
) => {
  const response = await axios.post<IPostMarkdownVariables>(
    ENDPOINT,
    formData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
