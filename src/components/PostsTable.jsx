import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

function PostsTable({ posts }) {
  return (
    <TableContainer style={{ maxHeight: 300 }}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell align="right">{post.userId}</TableCell>
              <TableCell>{`${post.title.substring(0, 20)}...`}</TableCell>
              <TableCell>{`${post.body.substring(0, 20)}...`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

PostsTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsTable;
