import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import { userService } from "~/api/services/user.service";
import type { User, CreateUserDto, UpdateUserDto } from "~/types/user.types";

export const useUsers = () => {
  const queryClient = useQueryClient();

  // Get all users
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => userService.getUsers(),
  });

  // Get single user
  const useUser = (id: Ref | string) => {
    return useQuery({
      queryKey: ["user", id],
      queryFn: () => userService.getUserById(unref(id)),
      enabled: computed(() => !!unref(id)),
    });
  };

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: (data: CreateUserDto) => userService.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // Update user mutation
  const updateUserMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) =>
      userService.updateUser(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
    },
  });

  // Delete user mutation
  const deleteUserMutation = useMutation({
    mutationFn: (id: string) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    users,
    isLoading,
    error,
    useUser,
    createUser: createUserMutation.mutate,
    updateUser: updateUserMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    isCreating: createUserMutation.isPending,
    isUpdating: updateUserMutation.isPending,
    isDeleting: deleteUserMutation.isPending,
  };
};
