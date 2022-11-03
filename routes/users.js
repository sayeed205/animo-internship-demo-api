import {
  createUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleWorkout,
} from "../controllers/userController.js";

import { Router } from "express";

const router = Router();

// swagger ui schema
/**
 * @swagger
 * components:
 *  schemas:
 *    users:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - age
 *        - country
 *      properties:
 *        firstName:
 *          type: string
 *          description: First name of the user
 *        lastName:
 *          type: string
 *          description: Last name of the user
 *        age:
 *          type: number
 *          description: Age of the user
 *        country:
 *          type: string
 *          description: Country name of the user
 *      example:
 *        firstName: Salman
 *        lastName: Khan
 *        age: 69
 *        country: India
 */

/**
 * @swagger
 * tags:
 *  name: users
 *  description: Manage users in the database
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    tags: [users]
 *    summary: Returns all the users
 *    responses:
 *      200:
 *        description: The list of the users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/users'
 *
 */

router.get("/", getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get a single user by id
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user ID
 *    responses:
 *      200:
 *        descriptions: The user details by user ID
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      404:
 *        description: user wasn't found
 *        content:
 *          application/json:
 *            schema:
 *              users:
 *                type: object
 *              properties:
 *                error:
 *                  type: string
 *                  description: Error message
 *              example:
 *                error: User doesn't exist
 */

router.get("/:id", getSingleUser);

/**
 * @swagger
 * /api/users:
 * post:
 *    summary: Create a new user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/users'
 *    responses:
 *      200:
 *        description: The user is successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      400:
 *        description: Some server error
 *        content:
 *          application/json:
 *            schema:
 *              users:
 *                type: object
 *              properties:
 *                error:
 *                  type: string
 *                  description: Error message
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Create a new user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      description: Enter user description
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/users'
 *    responses:
 *      200:
 *        description: The user is successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      400:
 *        description: Some server error
 *        content:
 *          application/json:
 *            schema:
 *              users:
 *                type: object
 *              properties:
 *                error:
 *                  type: string
 *                  description: Error message
 *
 */

router.post("/", createUser);

/**
 * @swagger
 * /api/users/{id}:
 *    delete:
 *      summary: Remove a user from database by id
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The user ID
 *      responses:
 *        200:
 *          description: The user details is updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/users'
 *        404:
 *          description: The user not found
 */

router.delete("/:id", deleteSingleUser);

/**
 * @swagger
 * /api/users/{id}:
 *    patch:
 *      summary: :Update and existing user
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The user ID
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      responses:
 *        200:
 *          description: The user details is updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#//components/schemas/users'
 *        404:
 *          description: The user not found
 *
 */

router.patch("/:id", updateSingleWorkout);

export default router;
