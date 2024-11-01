#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int data;
    struct node *next;
} NODE;

void createSLL(NODE **head)
{
    NODE *newNode, *tail;
    int n;
    printf("Enter the number of nodes: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        newNode = (NODE *)malloc(sizeof(NODE));
        printf("Enter value for %d node : ", i + 1);
        scanf("%d", &newNode->data);
        newNode->next = NULL;

        if (*head == NULL)
        {
            tail = newNode;
            *head = tail;
        }
        else
        {
            tail->next = newNode;
            tail = newNode;
        }
    }
}

void displaySLL(NODE *head)
{
    NODE *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    NODE *head = NULL;
    createSLL(&head);
    displaySLL(head);
    return 0;
}