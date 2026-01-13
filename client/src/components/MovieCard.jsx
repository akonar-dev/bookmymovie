import React from "react";
import { Card, Typography, Tag } from "antd";

const { Title, Text, Paragraph } = Typography;

const MovieCard = ({ movie = {} }) => {
  const {
    title,
    description,
    genre,
    rating,
    runningTime,
    posterPath,
  } = movie;

  return (
    <Card hoverable style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Poster */}
        <div style={{ flexShrink: 0 }}>
          {posterPath ? (
            <img
              src={posterPath}
              alt={title || "Movie Poster"}
              style={{
                width: 160,
                height: 240,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          ) : (
            <div
              style={{
                width: 160,
                height: 240,
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                borderRadius: 8,
              }}
            >
              No Poster
            </div>
          )}
        </div>

        {/* Details */}
        <div style={{ flex: 1 }}>
          <Title level={4} style={{ marginBottom: 8 }}>
            {title || "Untitled Movie"}
          </Title>

          <Tag color="blue" style={{ marginBottom: 8 }}>
            {genre || "Unknown Genre"}
          </Tag>

          <Paragraph ellipsis={{ rows: 3 }}>
            {description || "No description available."}
          </Paragraph>

          <Text>
            ⭐ Rating: {rating ?? "Not rated"}
          </Text>
          <br />
          <Text>
            ⏱ Runtime: {runningTime ? `${runningTime} mins` : "Not available"}
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;

