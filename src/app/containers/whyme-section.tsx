"use client"
import { Button, Card } from "@chakra-ui/react"

export default function Whyme() {
    return(
        <div className="flex w-full h-screen flex-col items-center justify-center">
            <div className="flex flex-col h-1/4">
                <h1 className="text-4xl font-bold">Why Me?</h1>
                <h2 className="text-2xl">Here is the reason</h2>
            </div>
            <div className="list h-1/2 w-full flex flex-wrap gap-8 items-center justify-center">
                <Card.Root className="item">
                    <Card.Body gap="2">
                        <Card.Title mb="2">Nue Camp</Card.Title>
                        <Card.Description>
                            This is the card body. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </Card.Description>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                        <Button>View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
                    <Card.Root className="item">
                        <Card.Body gap="2">
                            <Card.Title mb="2">Nue Camp</Card.Title>
                            <Card.Description>
                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </Card.Description>
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                            <Button>View</Button>
                            <Button>Join</Button>
                        </Card.Footer>
                    </Card.Root>
                    <Card.Root className="item">
                        <Card.Body gap="2">
                            <Card.Title mb="2">Nue Camp</Card.Title>
                            <Card.Description>
                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </Card.Description>
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                            <Button>View</Button>
                            <Button>Join</Button>
                        </Card.Footer>
                    </Card.Root>
                    <Card.Root className="item">
                        <Card.Body gap="2">
                            <Card.Title mb="2">Nue Camp</Card.Title>
                            <Card.Description>
                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </Card.Description>
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                            <Button>View</Button>
                            <Button>Join</Button>
                        </Card.Footer>
                    </Card.Root>
                    <Card.Root className="item">
                        <Card.Body gap="2">
                            <Card.Title mb="2">Nue Camp</Card.Title>
                            <Card.Description>
                                This is the card body. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </Card.Description>
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                            <Button>View</Button>
                            <Button>Join</Button>
                        </Card.Footer>
                    </Card.Root>
            </div>
        </div>
    )
}