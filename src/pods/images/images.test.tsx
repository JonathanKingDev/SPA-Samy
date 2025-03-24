import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ImagesContainer } from "./images.container";

vi.mock("./hook/useImages", () => ({
  useImages: vi.fn(),
}));

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useSearchParams: () => new URLSearchParams("query=test"),
  };
});

import { useImages } from "./hook/useImages";

const mockImages = [
  {
    id: "1",
    title: "Test image",
    author: "Alice",
    price: "100",
    picture: "/fake.jpg",
    liked: false,
    likesCount: 10,
  },
];

describe("ImagesContainer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders <Images /> when results are found", () => {
    (useImages as any).mockReturnValue({
      images: mockImages,
      fetchImages: vi.fn(),
      fetchFilteredImages: vi.fn(),
      likeImage: vi.fn(),
      hasMore: false,
    });

    render(<ImagesContainer />);

    expect(screen.getByText("Test image")).toBeTruthy();
  });

  it("renders <NotFound /> when no results are found", () => {
    (useImages as any).mockReturnValue({
      images: [],
      fetchImages: vi.fn(),
      fetchFilteredImages: vi.fn(),
      likeImage: vi.fn(),
      hasMore: false,
    });

    render(<ImagesContainer />);

    expect(screen.queryByText("Image Not found")).toBeTruthy();
  });
});
