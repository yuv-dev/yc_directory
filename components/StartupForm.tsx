"use client";
import Form from "next/form";
import React, { useActionState, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [pitch, setPitch] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValue = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };
      await formSchema.parseAsync(formValue);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        router.push(`/startup/${result._id}`);
      }


    } catch (error) {
      console.log(error);
      // if (error instanceof z.ZodError) {
      //   setErrors(fieldErrors as unknown as Record<string, string>);
      //   return { ...prevState, error: "Validation" };
      // }

      return {
        ...prevState,
        error: "An Unexpected error has occured",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <Form
      action={formAction}
      className=" startup-form mt-40 border-2 border-black shadow-200 rounded-lg p-6"
    >
      <div className=" flex flex-col">
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <input
          id="title"
          name="title"
          className="startup-form_input w-3xl"
          required
          placeholder="Startup Title"
        ></input>
        {errors.title && <p className="startup-form">{errors.title} </p>}
      </div>

      <div className=" flex flex-col">
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <input
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        ></input>
        {errors.description && (
          <p className="startup-form">{errors.description} </p>
        )}
      </div>

      <div className=" flex flex-col">
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category(Tech, Health, Education...)"
        ></input>
        {errors.category && <p className="startup-form">{errors.category} </p>}
      </div>

      <div className=" flex flex-col">
        <label htmlFor="link" className="startup-form_label">
          Image Url
        </label>
        <input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        ></input>
        {errors.category && <p className="startup-form">{errors.category} </p>}
      </div>

      <div data-color-mode="light" className=" flex flex-col">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.category && <p className="startup-form">{errors.category} </p>}
      </div>

      <Button type="submit" className="startup-form_btn">
        {isPending ? "Submitting-- " : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </Form>
  );
};

export default StartupForm;
