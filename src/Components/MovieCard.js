import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { watched } from "../redux/actions/movieActions";
function MovieCard({ el }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ backgroundColor: el.watched && "black", width: "18rem" }}>
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={el.posterUrl}
        />
        <Card.Body>
          <Card.Title> {el.title} </Card.Title>
          <Card.Text>{el.description}</Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={() => dispatch(watched(el.id))}>
          Watched
        </Button>
      </Card>
    </div>
  );
}

export default MovieCard;
