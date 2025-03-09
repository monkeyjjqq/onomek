import { useEffect, useState } from "react";
import { postModel, postAttachmentFiles } from "./usePosts";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useParams } from "react-router-dom";

export interface post {
  post: postModel;
  previews: postAttachmentFiles[];
  attachments: postAttachmentFiles[];
}

export interface postParams extends Record<string, string | undefined> {
  id: string;
  user: string;
  service: string;
}

const usePost = () => {
  const [post, setPost] = useState<post>();
  const [error, setError] = useState("");
  const { id, user, service } = useParams<postParams>();

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<post>(`/${service}/user/${user}/post/${id}`, {
        signal: controller.signal,
        params: {},
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { post, error };
};

export default usePost;
